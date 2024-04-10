"use client"


import trolleyImage from '@/images/trolley.png'
import img1Image from '@/images/img1.png'
import img2Image from '@/images/img2.png'
import img3Image from '@/images/img3.png'
import img4Image from '@/images/img4.png'
import img5Image from '@/images/img5.png'
import img6Image from '@/images/img6.png'
import img7Image from '@/images/img7.png'
import img8Image from '@/images/img8.png'

import * as C from '@/App.styles'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { getProdutos } from '@/utils/api'
import { Route, Routes } from 'react-router-dom'

const Page = () => {

  const query = useQuery({ queryKey: ['GET'], queryFn: getProdutos });


  return (
   <C.Container>
     <C.Header>
      <C.HeaderText>MKS sistemas</C.HeaderText>
      <C.HeaderImg>
        <Image src={trolleyImage} alt=''/>
      </C.HeaderImg>
     </C.Header>
    
     <C.ProdutoLocal>
        <C.ProdutoItems>
          <Image src={img1Image} alt='' width={218} height={285}/>
          <Image src={img2Image} alt='' width={218} height={285}/>
          <Image src={img3Image} alt='' width={218} height={285}/>
          <Image src={img4Image} alt='' width={218} height={285}/>
          <Image src={img5Image} alt='' width={218} height={285}/>
          <Image src={img6Image} alt='' width={218} height={285}/>
          <Image src={img7Image} alt='' width={218} height={285}/>
          <Image src={img8Image} alt='' width={218} height={285}/>
        </C.ProdutoItems> 
     </C.ProdutoLocal>
      <C.Footer>MKS Sistemas © Todos os direitos reservados</C.Footer>
   </C.Container>
  )
}

export default Page;