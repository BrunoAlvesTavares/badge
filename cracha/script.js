const links = {
    github: 'BrunoAlvesTavares',
    youtube: 'bruno',
    facebook: 'bruno alves tavares',
    instagram: 'alves_tavars',
    twitter: 'brun0tavares'

}

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')
        li.children.href
        li.children[0].href = `https://${social}.com/${links[social]}`

    }
}

    changeSocialMediaLinks()

    function gitTradeUsers(){
        const url = `https://api.github.com/users/${links.github}`

        fetch(url)
        .then(response => response.json())
        .then (data => {
            userName.textContent = data.login
            bio.textContent = data.bio
            userLink.href = data.html_url
            picture.src = data.avatar_url
            git.textContent = data.login

        })

        

    }

    gitTradeUsers()









