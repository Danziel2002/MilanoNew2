from django.shortcuts import render
from django.http import HttpResponse

def managerPage(req):
    recyclePermision = req.COOKIES.get('recycle')
    if(recyclePermision):
        userLevel = req.COOKIES.get('level')
        userExp = req.COOKIES.get('exp')
        userName = req.COOKIES.get('username') 
        return render(req, 'recycleManager/managerPage.html', {'Level':userLevel, 'Exp':userExp,'username':userName})
    else:
        return HttpResponse(403)
