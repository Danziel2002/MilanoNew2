from django.shortcuts import render


def homePage(req):
    userLevel = req.COOKIES.get('level')
    userExp = req.COOKIES.get('exp')
    userName = req.COOKIES.get('username')
    return render(req, 'otherPages/homePage.html', {'Level' :userLevel, 'Exp': userExp , 'username': userName})

def profilePage(req):
    return (req, 'otherPages/profilePage.html')

# Create your views here.
