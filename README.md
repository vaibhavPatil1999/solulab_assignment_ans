
# how to start
cd solulab_assignment_ans<br>
npm install<br>
nodemon start<br>

# API
### test using postman (body - raw,json)

#### first create categories
route - http://localhost:3000/category/create<br>
method - POST<br>
body - {
       "categoryName":"electric"
       }
       
#### to read categories
route - http://localhost:3000/category/read<br>
method - GET

#### to update categories
route - http://localhost:3000/category/updateCategory/4<br>
method - PUT<br>
body - {
       "categoryName":"device"
       }<br>
description - this end point update category by categoryId you provide in params

#### to delete categories
route - http://localhost:3000/category/deleteCategory/4<br>
method - DELETE<br>
description - this end point delete category by categoryId you provide in params

####  create products
route - http://localhost:3000/products/create<br>
method - POST<br>
body - {
         "productName":"fan",
         "qtyPerUnit":4,
         "unitPrice":1000,
         "unitInStock":10,
         "discontinued":true,
         "categoryId":1
       }<br>
 note - in categoryId column provide id which is exists in categories table
 
 #### to fetch all products
route -http://localhost:3000/products/readAll<br>
method - GET<br>

 #### to fetch  product by productId
 route - http://localhost:3000/products/read/1<br>
 method - GET<br>
 description - this end point fetch products by product id you provide in params
 
 #### to fetch  product by categoryId
 route - http://localhost:3000/products/readByCategory/3<br>
 method - GET<br>
 description - this end point fetch products by category id you provide in params
 
 #### to update products by productId
route - http://localhost:3000/products/update/8<br>
method - PUT<br>
body - {
         "productName":"xxxxxxxxxxxxx",
         "qtyPerUnit":3,
         "unitPrice":1,
         "unitInStock":1,
         "discontinued":true,
         "categoryId":2
     }<br>
description - this end point update products of productId you provide in params
 
#### to update products by categoryId
route - http://localhost:3000/products/updateByCategory/9<br>
method - PUT<br>
body - {
         "productName":"xxxxxxxxxxxxx",
         "qtyPerUnit":3,
         "unitPrice":1,
         "unitInStock":1,
         "discontinued":true,
         "categoryId":2
     }<br>
description - this end point update all products of categoryId you provide in params

#### to delete product by productId
route - http://localhost:3000/products/delete/20<br>
method - DELETE<br>
description - this end point delete single product by productId you provide in params<br>

#### to delete products by categoryId
route - http://localhost:3000/products/deleteByCategory/3<br>
method - DELETE<br>
description - this end point delete all product related to catetgoryId you provide in params

# about project
* project follows MVC pattern , to create model and for database i used sequelize ORM

 
 
