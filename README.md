
# how to start
cd solulab_assignment_ans
npm install
nodemon start

# API
### test using postman (body - raw,json)

#### first create categories
route - http://localhost:3000/category/create
method - POST
body - {
       "categoryName":"electric"
       }
       
#### to read categories
route - http://localhost:3000/category/read
method - GET

#### to update categories
route - http://localhost:3000/category/updateCategory/4
method - PUT
body - {
       "categoryName":"device"
       }
description - this end point update category by categoryId you provide in params

#### to delete categories
route - http://localhost:3000/category/deleteCategory/4
method - DELETE
description - this end point delete category by categoryId you provide in params

####  create products
route - http://localhost:3000/products/create
method - POST
body - {
         "productName":"fan",
         "qtyPerUnit":4,
         "unitPrice":1000,
         "unitInStock":10,
         "discontinued":true,
         "categoryId":1
       }
 note - in categoryId column provide id which is exists in categories table
 
 #### to fetch all products
route -http://localhost:3000/products/readAll
method - GET

 #### to fetch  product by productId
 route - http://localhost:3000/products/read/1
 method - GET
 description - this end point fetch products by product id you provide in params
 
 #### to fetch  product by categoryId
 route - http://localhost:3000/products/readByCategory/3
 method - GET
 description - this end point fetch products by category id you provide in params
 
 #### to update products by productId
route - http://localhost:3000/products/update/8
method - PUT
body - {
         "productName":"xxxxxxxxxxxxx",
         "qtyPerUnit":3,
         "unitPrice":1,
         "unitInStock":1,
         "discontinued":true,
         "categoryId":2
     }
description - this end point update products of productId you provide in params
 
#### to update products by categoryId
route - http://localhost:3000/products/updateByCategory/9
method - PUT
body - {
         "productName":"xxxxxxxxxxxxx",
         "qtyPerUnit":3,
         "unitPrice":1,
         "unitInStock":1,
         "discontinued":true,
         "categoryId":2
     }
description - this end point update all products of categoryId you provide in params

#### to delete product by productId
route - http://localhost:3000/products/delete/20
method - DELETE
description - this end point delete single product by productId you provide in params

#### to delete products by categoryId
route - http://localhost:3000/products/deleteByCategory/3
method - DELETE
description - this end point delete all product related to catetgoryId you provide in params

# about project
* project follows MVC pattern , to create model and for database i used sequelize ORM

 
 
