"use client"
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
    const { push } = useRouter()
    React.useEffect(() => {
        const fileName = 'catalogo.pdf';
        const filePath = `/catalogo.pdf`;

        const downloadLink = document.createElement('a');
        downloadLink.href = filePath;
        downloadLink.download = fileName;
        downloadLink.click();
        push('/'); // Redirecione para a página inicial após o download
    }, []);
    return (
        <div>Redirecionando...</div>
    )
}