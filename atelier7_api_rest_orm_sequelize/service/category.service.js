import CategoryRepository from "../repository/category.repository.js";

// Business Layer
class CategoryService {

    async fetchById(id) {
        let categoryFound = await CategoryRepository.findById(id);
        if (categoryFound) {
            return Promise.resolve(categoryFound);
        } else {
            return Promise.reject(new Error(`Category id=${id} not found`));
        }
    }

    async fetchAll() {
        return await CategoryRepository.findAll();
    }

    async createCategory(name) {
        return await CategoryRepository.create(name);
    }

    async deleteCategory(id) {
        return await CategoryRepository.delete(id);
    }
}

export default new CategoryService();
