import { NextRequest, NextResponse } from "next/server";
  
const campus = [
  {
    id: 1,
    nome_campi: "Campus Aquidauana",
    imagem_url: "https://cdn.opantaneiro.com.br/img/pc/920/610/dn_arquivo/2022/01/34399ad35d6f89af1208fbbdfdf4ddf26145fb3c.jpg"
  },
  {
    id: 2,
    nome_campi: "Campus Campo Grande",
    imagem_url: "https://cdn6.campograndenews.com.br/uploads/noticias/2021/08/01/0cb266f168c426d7202b271e2a4b015435b0866d.jpg"
  },
  {
    id: 3,
    nome_campi: "Campus Corumbá",
    imagem_url: "https://midiamax.uol.com.br/wp-content/uploads/2022/07/IFMS.jpg"
  },
  {
    id: 4,
    nome_campi: "Campus Coxim",
    imagem_url: "https://diariodoestadoms.com.br/fotos/noticias/2021/02/03/2021-02-03-102113/2021020310211300.jpg"
  },
  {
    id: 5,
    nome_campi: "Campus Dourados",
    imagem_url: "https://www.ifms.edu.br/campi/campus-dourados/sobre/fotos/fachada-ifms-campus-dourados-2023/img_7010.jpg"
  },
  {
    id: 6,
    nome_campi: "Campus Jardim",
    imagem_url: "https://www.zdknews.com.br/uploads/noticias/20190604104128-97Tm.jpg"
  },
  {
    id: 7,
    nome_campi: "Campus Naviraí",
    imagem_url: "https://www.ifms.edu.br/campi/campus-navirai/sobre/fotos/recepcao-dos-estudantes-2019/recepcao-estudantes-2019/@@images/6d15bf0f-c5c9-4c16-93c5-d3d459df3a20.jpeg"
  },
  {
    id: 8,
    nome_campi: "Campus Nova Andradina",
    imagem_url: "https://www.ifms.edu.br/imagens/imagens-noticias/aqui-tem-ciencia-e-tecnologia/nova-andradina/imagem-materia.jpg"
  },
  {
    id: 9,
    nome_campi: "Campus Ponta Porã",
    imagem_url: "https://www.ifms.edu.br/imagens/imagens-noticias/inauguracoes-pp-2023/pp-7.jpg"
  }
]



export async function GET() {
    try {
      return NextResponse.json(campus);
    } catch (error) {
      return NextResponse.error('Erro interno do servidor', { status: 500 });
    }
  };
