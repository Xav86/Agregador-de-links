function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar a tag img
    const img = document.querySelector("#profile img")
    
    //subtituiar a imagem

    if(html.classList.contains('light')){
        //se tiver light mode, adicionar a imagem lig
        img.setAttribute('src', 'assets/Avatar-light.png')
        img.setAttribute('alt', "foto de perfil de um grande homem")

    } else {
        //se tiver sem light mode deixar a imagem normal 
        img.setAttribute('src', 'assets/Avatar.png')
        img.setAttribute('alt', "foto de perfil de um grande homem")

    }

}