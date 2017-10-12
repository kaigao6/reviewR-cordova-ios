# reviewR-cordova-ios

ReviewR is an iOS Cordova App. It let's you review anything that you can take a picture of. 

The app has two screens:

1. The list of everything that you have reviewed.

2. An Add new review screen.

Home List page

The reviews will be saved in localStorage. The home page will read the localStorage data for your reviews and display a list of the titles and ratings.

Each item should have a delete button for removing the item from localStorage.


Add New page

The Add New page will let the user enter a title, a text review, a star rating (0 - 5), and have a button to take a picture. Clicking the button will open the native camera dialog and let the user take a picture. Save this picture at 300 x 300 pixels on the device. Use percentages to display the image at roughly 90% the width of the screen. 

Make the button disappear and be replaced with the image after the picture is taken.

Using the cordova-plugin-camera plugin to accomplish this.
