import {productsUrl} from "../endpoints";
import {CoreApi} from "./index";

class ProductAPI extends CoreApi {}

export default new ProductAPI(productsUrl)