import requests, re, base64, os, json, bs4, shutil
from bs4 import BeautifulSoup

# GENERAL
## Compile Regex
namePattern = re.compile(r'([a-zA-Z]+) ?(\([1-9]+\))?(\.png|.jpeg|.jpg|.gif)')
## Imgur Link
link = "https://i.imgur.com/"
## Thumbnail Size 't' = Small 'm' = Medium 'l' = 'Large'
thumbSize = 'm'
## Get clientId
if not os.path.isfile(os.path.join('.', 'uploadHelper', 'clientID.txt')):
    print('clientID.txt not found! Make sure the file is in the dir and has a valid clientID from imgur.')
idFile = open(os.path.join('.', 'uploadHelper', 'clientID.txt'), 'r')
clientId = idFile.read()
idFile.close()

# Make a backup of the gallery file
shutil.copy(os.path.join('.', 'gallery.html'), os.path.join('.', 'gallery(backup).html'))
print('Backup of gallery created.')

# Parses html into the 'soup' variable
with open(os.path.join('.', 'gallery.html')) as fp:
    soup = BeautifulSoup(fp, features="html.parser")
    fp.close()

displayBoxWP = soup.body.section.contents[3].contents[3]  # Selecting the displaybox of .gallery-category .wallpaper
displayBoxVC = soup.body.section.contents[5].contents[3]  # Selecting the displaybox of .gallery-category .vector
displayBoxPA = soup.body.section.contents[7].contents[3]  # Selecting the displaybox of .gallery-category .pixelart
displayBoxTR = soup.body.section.contents[9].contents[3]  # Selecting the displaybox of .gallery-category .traditional
displayBoxIC = soup.body.section.contents[11].contents[3] # Selecting the displaybox of .gallery-category .icon
displayBoxBN = soup.body.section.contents[13].contents[3] # Selecting the displaybox of .gallery-category .banner

# print(displayBoxWP)

# Loop over images in the working dir and uploads everything to imgur
directory = os.path('.', 'uploadHelper')
for filename in os.listdir(directory):
    mo = namePattern.search(filename)

    if mo is None: #skips files that don't match regex
        continue

    # Open image file and encode to base64
    with open(os.path.join(directory, filename), 'rb') as f:
        data = f.read()
        encodedData = base64.b64encode(data)
        f.close()

    category = mo.group(1) #get the category of the file via regex
    extension = mo.group(3) #get the extension of the file via regex

    # Upload
    url = 'https://api.imgur.com/3/image'
    payload = {'image': encodedData}
    files = {}
    headers = {
    'Authorization': 'Client-ID ' + clientId
    }

    response = requests.request('POST', url, headers = headers, data = payload, files = files, allow_redirects=False)

    # Respose handling
    jsonObj = json.loads(response.text) #parses the returned JSON into a Python var
    if jsonObj['status'] == 200:
        imgHash = jsonObj['data']['id']
        print('{} uploaded, Id: {}'.format(filename, imgHash))

        # Creating new tags
        new_div = soup.new_tag("div") #div to hold image
        new_div["class"] = "imgbox"
        new_a = soup.new_tag("a", href="{}{}{}".format(link, imgHash, extension)) #link to image
        new_img = soup.new_tag("img", alt="", src="{}{}{}{}".format(link, imgHash, thumbSize, extension)) #thumbnail

        new_a.append(new_img)
        new_div.append(new_a)
        # Chooses where to append the new file to the gallery, then deletes the file
        if category == 'wallpaper':
            displayBoxWP.append(new_div)
            os.unlink(os.path.join(directory, filename))
        elif category == 'vector':
            displayBoxVC.append(new_div)
            os.unlink(os.path.join(directory, filename))
        elif category == 'pixelart':
            displayBoxPA.append(new_div)
            os.unlink(os.path.join(directory, filename))
        elif category == 'traditional':
            displayBoxTR.append(new_div)
            os.unlink(os.path.join(directory, filename))
        elif category == 'icon':
            displayBoxIC.append(new_div)
            os.unlink(os.path.join(directory, filename))
        elif category == 'banner':
            displayBoxBN.append(new_div)
            os.unlink(os.path.join(directory, filename))
        else:
            print('Could not identify category of {}'.format(filename))
    else:
        print('{} failed to upload!'.format(filename))

# Write the new HTML to file
newHtml = open(os.path.join('.', 'gallery.html'), 'w')
newHtml.write(soup.prettify())
newHtml.close()