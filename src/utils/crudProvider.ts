import {
  FilterQuery,
  UpdateQuery,
  DocumentDefinition,
  QueryOptions,
  Model,
  InsertManyOptions,
} from "mongoose";

class BaseCrudProviderCls<document, Cdocument> {
  private DBModel: Model<any>;
  constructor(DBModel: Model<any>) {
    this.DBModel = DBModel;
  }

  async create(input: DocumentDefinition<Cdocument>) {
    const data = await this.DBModel.create(input);
    return data.toJSON();
  }

  async update(update: UpdateQuery<document>, options?: QueryOptions) {
    return this.DBModel.updateOne({ _id: update.id }, update, options);
  }

  async find(
    query: FilterQuery<document>,
    projection?: any,
    options?: QueryOptions
  ) {
    const result = await this.DBModel.find(query, projection, options);
    return result && result.map((d) => d.toJSON());
  }

  async delete(query: FilterQuery<document>, options?: QueryOptions) {
    const result = await this.DBModel.deleteOne(query);
    return result;
  }
}

const BaseCrudProvider = function <document, Cdocument>(DBModel: Model<any>) {
  const CRUD = new BaseCrudProviderCls<document, Cdocument>(DBModel);

  return {
    create: CRUD.create.bind(CRUD),
    update: CRUD.update.bind(CRUD),
    find: CRUD.find.bind(CRUD),
    delete: CRUD.delete.bind(CRUD),
  };
};

export { BaseCrudProvider };
