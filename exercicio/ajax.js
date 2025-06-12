document.addEventListener('DOMContentLoaded', function() {
    const name = document.querySelector('#name');	
    const avatar = document.querySelector('#avatar');
    const username = document.querySelector('#username');
    const repositories = document.querySelector('#repositories');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const profileLink = document.querySelector('#link');

    fetch('https://api.github.com/users/jawc-05')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        name.innerHTML = json.name;
        avatar.src = json.avatar_url;
        username.innerHTML = json.login;
        repositories.innerHTML = json.public_repos;
        followers.innerHTML = json.followers;
        following.innerHTML = json.following;
        profileLink.href = json.html_url;

        
    })
})