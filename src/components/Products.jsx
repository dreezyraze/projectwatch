import { getWatches } from "../axios/fetch/product"
import { useQuery } from "@tanstack/react-query";
import ProductsCard from "./ProductsCard";
export default function(){
    const{data,isLoading,isError,error}=useQuery({
         queryKey:['products'],
         queryFn:getWatches
    })
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error: {error.message}</div>
    
    return(
        <div>
            <ProductsCard data={data}/>
        </div>
    )
}