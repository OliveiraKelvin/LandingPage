import { Produtos } from "@/types/produtos";
import axios from "axios";

export const getProdutos = async (): Promise<Produtos>  => {
    const result = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1');
    return result.data
  }