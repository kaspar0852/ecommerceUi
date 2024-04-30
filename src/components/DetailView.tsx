import { useEffect, useState } from "react"
import { GetProduct, ProductService } from "../services/ecommerce-services"
import { useParams } from "react-router-dom"
import ProductDetailView from "./ProductDetailView"


interface response{
    data:GetProduct
}

const ItemDetail = () => {
    const { id } = useParams<{ id?: string }>();
    const [product, setProduct] = useState<GetProduct | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          if (id !== undefined) {
            const product = await ProductService.productRead(parseInt(id, 10));
            setProduct(product);
            setIsLoading(false);
          }
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };
  
      fetchProduct();
    }, [id]); 

   console.log(product?.Price)
   
    return (
      <div>
        {isLoading ? (
          <p>Loading product details...</p>
        ) : (
          <ProductDetailView product={product} />
        )}
      </div>
    );
  };


export default ItemDetail;