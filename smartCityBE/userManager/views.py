from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate

from .models import profile

import json, math
@csrf_exempt
def registerUser(req):
    if req.method == 'POST':
        username = req.GET.get('username')
        password = req.GET.get('password')
        email = req.GET.get('email')
        newUser = User.objects.create_user(username, email, password)
        return HttpResponse(200)
    
@csrf_exempt
def giveExp(req):
    if req.method == 'POST':
        username = req.GET.get('username')
        user = profile.objects.get(user__username=username)
        expEarned = math.floor(float(req.GET.get('experience')))
        newExp = int(user.experience) + expEarned
        user.experience = math.ceil(newExp)
        while user.experience > 100:
            user.experience = newExp - 100
            user.level += 1
        responseJson = {'exp': user.experience, 'level': user.level}
        user.save()
        return JsonResponse(responseJson)


@csrf_exempt
def loginUser(req):
    if req.method == 'GET':
        username = req.GET.get('username')
        password = req.GET.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            profileOfUser = profile.objects.get(user__username=username)
            data = {'loggedIn':True,
                    'username':username,
                    'exp':profileOfUser.experience,
                    'level':profileOfUser.level,
                    'recycle':profileOfUser.recycleManager}
            response = JsonResponse(data)
            response.set_cookie('username', username, max_age=60)
            return response
        else:
            data = {'loggedIn':False}
            return HttpResponse(json.dumps(data))

def forgotPassword(req):
    return render(req, 'userManager/forgotPasswordPage.html')
