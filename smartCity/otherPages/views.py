from django.shortcuts import render, redirect


def homePage(req):
    userLevel = req.COOKIES.get('level')
    userExp = req.COOKIES.get('exp')
    userName = req.COOKIES.get('username')
    manager = req.COOKIES.get('recycle')
    if userName != None:
        return render(req, 'otherPages/homePage.html', {'Level' :userLevel, 'Exp': userExp , 'username': userName, 'manager': manager})
    else:
        return redirect('/account/loginUser/')

def profilePage(req):
    return (req, 'otherPages/profilePage.html')

# Create your views here.
