from django.shortcuts import render

# Create your views here.


def scanComponent(req):
    userLevel = req.COOKIES.get('level')
    userExp = req.COOKIES.get('exp')
    userName = req.COOKIES.get('username') 
    return render(req, 'transportManager/mainPage.html',{'Level' :userLevel, 'Exp': userExp , 'username': userName})
