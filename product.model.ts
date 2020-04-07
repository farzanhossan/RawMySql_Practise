// /* eslint-disable @typescript-eslint/camelcase */
// import {APIError} from '../../core';
// import Product from './product.db.schema';
// import {Op} from 'sequelize';
// // import {Op, QueryTypes} from 'sequelize';
// import Genre from '../genre/genere.db.schema';
// import ContentType from '../contentType/contentType.db.schema';
// import ContentCategory from '../contentCategory/contentCategory.db.schema';
// import MaturityLevel from '../maturityLevel/maturityLevel.db.schema';
// import Category from '../category/category.db.schema';
// import RelatedProduct from '../relatedProducts/relatedProducts.db.schema';
// import CustomerProductFeedback from '../customerProductFeedback/customerProductFeedback.db.schema';
// import BannerProduct from '../bannerProduct/bannerProduct.db.schema';
// // import sequelize from '../../core/db/mysql.db';

// Genre.belongsToMany(Product, {through: 'genre_products'});
// Product.belongsToMany(Genre, {through: 'genre_products', as: 'genries'});
// Product.belongsToMany(Category, {through: 'category_products'});

// Product.belongsToMany(Product, {
//   through: RelatedProduct,
//   foreignKey: 'product_id',
//   as: 'related_product'
// });
// Product.belongsToMany(Product, {
//   through: RelatedProduct,
//   foreignKey: 'related_product_id',
//   as: 'main_product'
// });

// Product.hasMany(CustomerProductFeedback, {as: 'customer_product_feedback'});

// Product.belongsToMany(Category, {
//   through: 'category_products',
//   foreignKey: 'product_id',
//   as: 'category'
// });
// Category.belongsToMany(Product, {
//   through: 'category_products',
//   foreignKey: 'category_id',
//   as: 'product'
// });

// // product
// export const getAllProducts = async (): Promise<object> => {
//   try {
//     const productList = await Product.findAll({
//       where: {
//         status: 1,
//         deleted_at: {[Op.eq]: null}
//       },
//       include: [
//         {
//           model: ContentType,
//           require: false,
//           where: {
//             deleted_at: {[Op.eq]: null}
//           }
//         },
//         {
//           model: ContentCategory,
//           require: false,
//           where: {
//             deleted_at: {[Op.eq]: null}
//           }
//         },
//         {
//           model: MaturityLevel,
//           require: false
//         },
//         {
//           model: Category,
//           require: false,
//           as: 'category',
//           where: {
//             deleted_at: {[Op.eq]: null}
//           },
//           through: {
//             attributes: []
//           }
//         },
//         {
//           model: Product,
//           require: false,
//           as: 'related_product',
//           through: {
//             attributes: []
//           }
//         },
//         {
//           model: Genre,
//           as: 'genries',
//           require: false,
//           where: {
//             deleted_at: {[Op.eq]: null}
//           }
//         }
//       ]
//     });
//     return productList;
//   } catch (error) {
//     throw new APIError(error);
//   }
// };

// export const getProductById = async (productId): Promise<object> => {
//   try {
//     const productList = await Product.findOne({
//       where: {
//         id: productId,
//         deleted_at: {[Op.eq]: null}
//       },
//       include: [
//         {
//           model: ContentType,
//           require: false,
//           where: {
//             deleted_at: {[Op.eq]: null}
//           }
//         },
//         {
//           model: ContentCategory,
//           require: false,
//           where: {
//             deleted_at: {[Op.eq]: null}
//           }
//         },
//         {
//           model: MaturityLevel,
//           require: false
//         },
//         {
//           model: Category,
//           require: false,
//           as: 'category',
//           where: {
//             deleted_at: {[Op.eq]: null}
//           },
//           through: {
//             attributes: []
//           }
//         },
//         {
//           model: Product,
//           require: false,
//           as: 'related_product',
//           through: {
//             attributes: []
//           }
//         },
//         {
//           model: Genre,
//           as: 'genries',
//           require: false,
//           where: {
//             deleted_at: {[Op.eq]: null}
//           }
//         },
//         {
//           model: CustomerProductFeedback,
//           as: 'customer_product_feedback',
//           require: false
//         }
//       ]
//     });
//     return productList;
//   } catch (error) {
//     throw new APIError(error);
//   }
// };

// export const getProductsByCategory = async (id): Promise<object> => {
//   try {
//     const productList = await Product.findAll({
//       where: {
//         deleted_at: {[Op.eq]: null}
//       },
//       include: [
//         {
//           model: ContentType,
//           require: false,
//           where: {
//             deleted_at: {[Op.eq]: null}
//           }
//         },
//         {
//           model: ContentCategory,
//           require: false,
//           where: {
//             deleted_at: {[Op.eq]: null}
//           }
//         },
//         {
//           model: MaturityLevel,
//           require: false
//         },
//         {
//           model: Category,
//           require: false,
//           as: 'category',
//           where: {
//             deleted_at: {[Op.eq]: null},
//             id: id
//           },
//           through: {
//             attributes: []
//           },
//           attributes: []
//         },
//         {
//           model: Product,
//           require: false,
//           as: 'related_product',
//           through: {
//             attributes: []
//           }
//         },
//         {
//           model: Genre,
//           as: 'genries',
//           require: false,
//           where: {
//             deleted_at: {[Op.eq]: null}
//           }
//         }
//       ]
//     });
//     return productList;
//   } catch (error) {
//     console.log('error------', error);
//     // throw error;
//     throw new APIError(error);
//   }
// };

// export const getProductsByContentType = async (typeId): Promise<object> => {
//   try {
//     const productList = await Product.findAll({
//       where: {
//         deleted_at: {[Op.eq]: null}
//       },
//       include: [
//         {
//           model: ContentType,
//           require: false,
//           where: {
//             deleted_at: {[Op.eq]: null},
//             id: typeId
//           },
//           attributes: []
//         },
//         {
//           model: ContentCategory,
//           require: false,
//           where: {
//             deleted_at: {[Op.eq]: null}
//           }
//         },
//         {
//           model: MaturityLevel,
//           require: false
//         },
//         {
//           model: Category,
//           require: false,
//           as: 'category',
//           where: {
//             deleted_at: {[Op.eq]: null}
//           },
//           through: {
//             attributes: []
//           }
//         },
//         {
//           model: Product,
//           require: false,
//           as: 'related_product',
//           through: {
//             attributes: []
//           }
//         },
//         {
//           model: Genre,
//           as: 'genries',
//           require: false,
//           where: {
//             deleted_at: {[Op.eq]: null}
//           }
//         }
//       ]
//     });
//     return productList;
//   } catch (error) {
//     console.log('error------', error);
//     // throw error;
//     throw new APIError(error);
//   }
// };

// export const getProductsById = async (id): Promise<object> => {
//   try {
//     const customerList = [id];
//     return customerList;
//   } catch (error) {
//     console.log('error------', error);
//     // throw error;
//     throw new APIError(error);
//   }
// };

// export const getHourlyNewProducts = async (): Promise<object> => {
//   try {
//     const customerList = [];
//     return customerList;
//   } catch (error) {
//     console.log('error------', error);
//     // throw error;
//     throw new APIError(error);
//   }
// };

// export const getProductsByReelCategoryId = async (id): Promise<object> => {
//   try {
//     const productList = await Product.findAll({
//       where: {
//         deleted_at: {[Op.eq]: null}
//       },
//       include: [
//         {
//           model: ContentType,
//           require: false,
//           where: {
//             deleted_at: {[Op.eq]: null}
//           }
//         },
//         {
//           model: ContentCategory,
//           require: false,
//           where: {
//             deleted_at: {[Op.eq]: null},
//             id: id
//           },
//           attributes: []
//         },
//         {
//           model: MaturityLevel,
//           require: false
//         },
//         {
//           model: Category,
//           require: false,
//           as: 'category',
//           where: {
//             deleted_at: {[Op.eq]: null}
//           },
//           through: {
//             attributes: []
//           }
//         },
//         {
//           model: Product,
//           require: false,
//           as: 'related_product',
//           through: {
//             attributes: []
//           }
//         },
//         {
//           model: Genre,
//           as: 'genries',
//           require: false,
//           where: {
//             deleted_at: {[Op.eq]: null}
//           }
//         }
//       ]
//     });
//     return productList;
//   } catch (error) {
//     throw new APIError(error);
//   }
// };

// export const getCustomerProductFeedback = async (
//   customerId,
//   productId
// ): Promise<object> => {
//   try {
//     const customerFeedback = await CustomerProductFeedback.findAll({
//       where: {
//         customer_id: customerId,
//         product_id: productId
//       }
//     });

//     return customerFeedback;
//   } catch (error) {
//     throw new APIError(error);
//   }
// };

// export const getAllProductsWithBasic = async (): Promise<object> => {
//   try {
//     const customerList = [];
//     return customerList;
//   } catch (error) {
//     console.log('error------', error);
//     // throw error;
//     throw new APIError(error);
//   }
// };

// export const getContentTypeById = async (typeId): Promise<object> => {
//   try {
//     const contentType = await ContentType.findOne({
//       where: {
//         id: typeId,
//         deleted_at: {[Op.eq]: null}
//       }
//     });
//     return contentType;
//   } catch (error) {
//     throw new APIError(error);
//   }
// };

// export const getContentCategoryById = async (categoryId): Promise<object> => {
//   try {
//     const contentCategory = await ContentCategory.findOne({
//       where: {
//         id: categoryId,
//         deleted_at: {[Op.eq]: null}
//       }
//     });
//     return contentCategory;
//   } catch (error) {
//     throw new APIError(error);
//   }
// };

// export const productsForBanner = async (): Promise<object> => {
//   try {
//     // const productList = await Product.findAll({
//     //   where: {
//     //     // deleted_at: {[Op.eq]: null},
//     //     id: {
//     //       [Op.in]: await BannerProduct.findAll({
//     //         attributes: ['product_id']
//     //       }).map((product_id: any) => product_id.get('id'))
//     //     }
//     //   }
//     // });
//     const productList = await Product.findAll({
//       where: {
//         id: {
//           [Op.in]: await BannerProduct.findAll({
//             attributes: ['id']
//             // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           }).map((product_id: any) => product_id.get('id'))
//         }
//       }
//     });
//     // const productList = await sequelize.query(
//     //   'SELECT * FROM products WHERE id IN (SELECT product_id FROM `banner_products`)',
//     //   {
//     //     type: QueryTypes.SELECT
//     //   }
//     // );
//     return productList;
//   } catch (error) {
//     throw new APIError(error);
//   }
// };
