<img src="./.readme/noroff-light.png" width="160" align="right">

# Delivery

### Week 1

- **Gant chart or KanBan board with todos in appropriate lanes(Trello or Notion)**  
  Notion board: https://www.notion.so/thereselybosemproj2/  
  Invite link: https://www.notion.so/thereselybosemproj2/invite/e50e85cd49a65b47ad4ca6205a617926f1b09280
- **Wireframes**  
  Wireframes: https://www.notion.so/thereselybosemproj2/Wireframes-5b3ae6bacc304ece89be50303b587686


### Week 2

- **XD or Figma prototype**   
  Adobe XD Prototype: https://xd.adobe.com/view/52c34290-3df9-4a09-8b21-a6fe844e9ac4-0790/


### Week 5
- **Report**

This semester project, or at least the experience of it, has been quite a bit influenced by the current lockdown or so to speak. During the spring semester I didn’t feel too affected by the situation, but this time around my motivation took a hit, which in turn affected parts of my work. For instance I was quite disappointed with myself for not being able to implement all the features I hoped for. I am however very pleased with the end result.

I wouldn’t exactly say it was easy, but what may have fallen most naturally was the design of the site. I had a relatively clear vision of what I wanted to create, which in my opinion coheres with the requirements, and I think it turned out pretty great. 

What was most challenging is probably the API work. For a while I struggled a lot with adding new products. They were added successfully, but all fields resulted with a value of null. It turned out I hadn’t added Content-type as header, and in the midst of the problem I was blinded by code from a previous assignment where I also hadn’t used it, but where it somehow worked. This lead me to acknowledge my need to learn more about headers. 

I also had a hard time figuring out how to specify the role of a user when registrating, and as I was closing in on the deadline I decided not to pursue it further. I would however love to learn more here as well. 

I believe I might have underestimated the amount of work in regards to building both the layout and the JavaScript. This took a lot longer than anticipated, and due to my lack of motivation, I struggled with being productive. Once things started falling into place and I no longer felt completely overwhelmed with the amount of work ahead, I really started enjoying the work again. And that’s what I enjoyed the most as well, seeing it all come together how I envisioned it. 

What I took the most from this experience, and what I most think I should have approached differently is time management and just get it done while I still have a lot of time. This way I probably could have added a lot more fun features and also learned even more rather than using a lot of the same methods I have with previous assignments. I also think I should work more with basic algorithms and get those completely under control, so as not to spend too much time pondering over how to go about different challenges. 


---------------

# Semester project 2

To create an e-commerce website that has an Admin and Front-End respectively. The Front-End should be responsive and the website is to be populated by an API supplied by Noroff. 

## Brief

You are to build an e-commerce website. You can choose the theme of your website. It should follow the site architect described below. 

You must design it using your favourite tool. Build the front-end and admin pages to update and delete products.

You must apply all that you have learned in:

- Interaction Design, 
- Design 2.
- JavaScript 2

It must have a good user experience and a good ui design, following today's trends and design patterns.

Build a front-end with a homepage, product category list page and product detail page. 

Build admin pages to update and delete products. 

> Building a checkout and payment system is not a part of the project.

### Level 1 is required.

### Level 2 and 3 are optional. 

# Level 1 Process (Required)

## Customer pages

### Home page

The home page must include:
- A hero banner with an image that is uploaded to Strapi.
- A list of featured products.
    - In Strapi each product must have a featured flag that can be turned on or off. When the flag is on, the product shall be displayed on the homepage.

### Products page

The products page must include:
- A list of all products added to Strapi. Each product must display its title, price and image. The product shall link to its products detail page.
- A search text box.  When searching, the products   that include the searched text in their **title** or **description** shall be listed.

### Product details page

The product details page must include:
- the product title,
- the product description,
- the product image,
- the product’s price,
- an add to cart button.

### Cart/Basket page 

The cart/basket page must display a list of all products added to cart.  Load the items that have been added to local storage and display them on the page.

Each product in the cart must display:
- the product title,
- the product’s price,
- a link to the product view page, and optionally display the product image,

After the list of products, display the total price of all the products in the cart.

> **Important:** the cart page is not a checkout page. No payments or user details are required to be taken.

## Admin section
The admin section must include the following features.

### Login/Logout 

Create an admin login form that allows administrator users to login.

- Use localStorage to keep the user logged in.
- When logged in, display a logout button in the layout the logs the user out.
- Logging out should not clear items not related to login from localStorage.

### Add/edit products

Create form(s) that allow products to be added and edited.  The form must allow the user to toggle whether a product is featured.

#### Product images

For adding/editing product images use either of these 2 methods:

1. Use a file upload field to upload images to Strapi, or
2. Use a text input that allows a URL to be entered. This allows an image from CDN to be used as the product image.

### Delete existing product

Allow products to be deleted. Before a product is deleted you must display a confirmation. The product should only be deleted if the user confirms. If the user cancels, the product must not be deleted.

## Level 2

- Category filters & price filter (on product list page)
- Product page image gallery

## Level 3

- Customer Registration
- Customers must not have access to admin section
- Customers will be able to create a list of favourites products

# Rules

- The website must be responsive on all devices.
- Use vanilla (regular) JavaScript for the project and split your code up using modules (imports/exports).
- No JavaScript frameworks (Vue.Js, React.js).
- You can use small JS libraries to perform tasks such as formatting dates with Moment.js
- You may choose a CSS framework but your design must override the basic framework styles. Your UI must appear indistinguishable from the framework base styles.
- Data must be updated from the pages and API calls you create. You are not allowed to edit the API content through the front end of the strapi admin website found at http://localhost:1337/.
- Copying and sharing of any code will result in your project being failed.

# Marking criteria

- All functionality in Level 1 should be implemented.
- The design should be coherent and provide a good user experience.
- All the customer-facing and admin pages must be fully responsive.
- Use appropriate names for Sass classes and folders.
- All code should be properly formatted and arranged with sensible variable and function names. Use modules (imports/exports) to organise your code.
Rules


## Strapi API

You will need Node.js v14.

To start the API change directory to `api` install the npm dependecies and then run `npm run develop`

```bash
$ cd api/
> npm install
> npm run develop
```

### User credentials

```bash
email: admin@admin.com
username: admin
password: Pass1234
```

## Submission

### Week 1

- Gant chart or KanBan board with todos in appropriate lanes(Trello or Notion). 
- Wireframes.

### Week 2

- XD or Figma prototype.

### Final submission

- Push all changes to Github Classroom Repository
- To Moodle submit PDF with a GitHub Repository URL inside of it. If Moodle forces you to put a ZIP, put the PDF inside the ZIP.
- No deployment is required, It will be tested on a local development environment.

## Time 

5 Weeks

> Deadline: 11 December 2020 at 23:59.

