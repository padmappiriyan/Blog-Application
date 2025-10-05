package com.priyan.blog.services;

import com.priyan.blog.domain.entity.Category;

import java.util.List;

public interface CategoryService {
    List<Category>  listCategories();
    Category createCategory(Category category);
}
