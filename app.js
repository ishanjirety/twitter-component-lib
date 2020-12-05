const twitter= document.querySelector('#twitter-ico');
const home= document.querySelector('#home-ico');
const search= document.querySelector('#search-ico');
const notification= document.querySelector('#notification-ico');
const message= document.querySelector('#message-ico');
const bookmark= document.querySelector('#bookmark-ico');
const list= document.querySelector('#list-ico');
const user= document.querySelector('#user-ico');
const more= document.querySelector('#more-ico');
const addtweet= document.querySelector('#addTweet-ico');
const searchBox = document.querySelector('#search-box');
const searchDiv = document.querySelector('#search-btn-ico');

twitter.addEventListener('mouseenter',()=>{
    twitter.style.backgroundColor="#E8F5FE"
})
twitter.addEventListener('mouseleave',()=>{
    twitter.style.backgroundColor="#FFFFFF"
})

home.addEventListener('mouseenter',()=>{
    home.style.backgroundColor="#E8F5FE"
})
home.addEventListener('mouseleave',()=>{
    home.style.backgroundColor="#FFFFFF"
})

search.addEventListener('mouseenter',()=>{
    search.style.backgroundColor="#E8F5FE"
})
search.addEventListener('mouseleave',()=>{
    search.style.backgroundColor="#FFFFFF"
})

notification.addEventListener('mouseenter',()=>{
    notification.style.backgroundColor="#E8F5FE"
})
notification.addEventListener('mouseleave',()=>{
    notification.style.backgroundColor="#FFFFFF"
})

message.addEventListener('mouseenter',()=>{
    message.style.backgroundColor="#E8F5FE"
})
message.addEventListener('mouseleave',()=>{
    message.style.backgroundColor="#FFFFFF"
})

bookmark.addEventListener('mouseenter',()=>{
    bookmark.style.backgroundColor="#E8F5FE"
})
bookmark.addEventListener('mouseleave',()=>{
    bookmark.style.backgroundColor="#FFFFFF"
})

list.addEventListener('mouseenter',()=>{
    list.style.backgroundColor="#E8F5FE"
})
list.addEventListener('mouseleave',()=>{
    list.style.backgroundColor="#FFFFFF"
})

user.addEventListener('mouseenter',()=>{
    user.style.backgroundColor="#E8F5FE"
})
user.addEventListener('mouseleave',()=>{
    user.style.backgroundColor="#FFFFFF"
})

more.addEventListener('mouseenter',()=>{
    more.style.backgroundColor="#E8F5FE"
})
more.addEventListener('mouseleave',()=>{
    more.style.backgroundColor="#FFFFFF"
})

addtweet.addEventListener('mouseenter',()=>{
    addtweet.style.backgroundColor="#E8F5FE"
})

addtweet.addEventListener('mouseleave',()=>{
    addtweet.style.backgroundColor="#FFFFFF"
})


searchBox.addEventListener('focusin',()=>{
    searchBox.style.border="0.5px solid #03A9F4"
    searchDiv.style.border="1px solid #03A9F4"
    searchDiv.style.backgroundColor="#FFFFFF"
    searchBox.style.backgroundColor="#FFFFFF"

})

searchBox.addEventListener('focusout',()=>{
    searchBox.style.borderColor="#FFFFFF"
    searchDiv.style.borderColor="#FFFFFF"
    searchDiv.style.backgroundColor="#EBEEF0"
    searchBox.style.backgroundColor="#EBEEF0"
})







