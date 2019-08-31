import requests, re, base64, os, json, bs4
from bs4 import BeautifulSoup

# Compile Regex
namePattern = re.compile(r'(.*)(\.png|.jpeg|.jpg|.gif)')

# Get clientId
idFile = open('./uploadHelper/clientID.txt', 'r')
clientId = idFile.read()
idFile.close()

#Stores the uploaded files' hashes
imgHashList = []
imgHashList2 = {}


# Loop over images in working dir and uploads everything to imgur
for filename in os.listdir('./uploadHelper/'):
    mo = namePattern.search(filename)

    if mo is None:
        continue

    # Open image file and encode to base64
    with open('./uploadHelper/' + filename, 'rb') as f:
        data = f.read()
        encodedData = base64.b64encode(data)
        f.close()

    # Upload
    """ url = 'https://api.imgur.com/3/image'
    payload = {'image': encodedData}
    files = {}
    headers = {
    'Authorization': 'Client-ID ' + clientId
    }

    response = requests.request('POST', url, headers = headers, data = payload, files = files, allow_redirects=False) """

    # Respose handling
    """ jsonObj = json.loads(response.text)
    if jsonObj['status'] == 200:
        print('Image uploaded, Id:' + jsonObj['data']['id'])
        imgHashList.append(jsonObj['data']['id']) """

# Parses html into the variable
with open("./gallery.html") as fp:
    soup = BeautifulSoup(fp, features="html.parser")
    fp.close()

displayBoxWP = soup.body.section.contents[3].contents[3]  # Selecting the displaybox of .gallery-category .wallpaper
displayBoxVC = soup.body.section.contents[5].contents[3]  # Selecting the displaybox of .gallery-category .vector
displayBoxPA = soup.body.section.contents[7].contents[3]  # Selecting the displaybox of .gallery-category .pixelart
displayBoxTR = soup.body.section.contents[9].contents[3]  # Selecting the displaybox of .gallery-category .traditional
displayBoxIC = soup.body.section.contents[11].contents[3] # Selecting the displaybox of .gallery-category .icon
displayBoxBN = soup.body.section.contents[13].contents[3] # Selecting the displaybox of .gallery-category .banner

for image in imgHashList:
    # Creating new tags
    new_div = soup.new_tag("div")
    new_div["class"] = "imgbox"
    new_a = soup.new_tag("a", href="{}".format(image))
    new_img = soup.new_tag("img", alt="", src="{}".format(image) + "m")
    new_a.append(new_img)
    new_div.append(new_a)
    displayBoxBN.append(new_div)

# print(displayBoxWP)
# print(displayBoxVC)
# print(displayBoxPA)
# print(displayBoxTR)
# print(displayBoxIC)
# print(displayBoxBN)

newHtml = open('test.html', 'w')
newHtml.write(soup.prettify())
newHtml.close()