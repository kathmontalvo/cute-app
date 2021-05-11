import Head from "next/head";
import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

const NotFound = () => {

    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [])
    return ( 
        <div className="not-found">
            <Head>
                <title>Página no encontrada</title>
                <meta name="description" content="Error 404 | Página no encontrada" />
                <link rel="icon" href="/favicon.ico" />
            </Head>        
            <h1>¡Ups!</h1>
            <h2>La página que buscas no se ha encontrado.</h2>
            <p> Regresar a <Link href="/"><a> Inicio </a></Link></p>
        </div>
     );
}
 
export default NotFound;