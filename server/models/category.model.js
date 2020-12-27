const db = require('../utils/db');

module.exports = {
  all() {
    return db('category');
  },

  async single(id) {
    const categorys = await db('category')
      .where('category_id', id);

    if (categorys.length === 0) {
      return null;
    }

    return categorys[0];
  },

  add(category) {
    return db('category').insert(category);
  },

  del(id) {
    return db('category')
      .where('category_id', id)
      .del();
  },

  async getSubCategory(id) {
    var subquery = db('category').where('id', id).select('id');
    
    return db('subCategory').where('categoryId', 'in', subquery);
  }
  ,
  async getWithSubCategory() {
    /*return db('category')
    .join('subCategory', 'category.id', '=', 'subCategory.categoryId')
    .select({ categoryId: 'category.id' }, { categoryName: 'category.name' },{ subCategoryId: 'subCategory.id' }, { subCategoryName: 'subCategory.name' } );*/
    var listCategory = await db('category');
    var listSubCategory = await db('subCategory');

    for (var i = 0; i < listCategory.length; i++){
      var list = [];
      for (var j = 0; j < listSubCategory.length; j++){
        if(listSubCategory[j].categoryId == listCategory[i].id)
          list.push(listSubCategory[j]);
      }
      listCategory[i].listSubCategory = list;
      list =[]      
    }
    console.log(listCategory);

    return listCategory;
  }
};
