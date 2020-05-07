from django.shortcuts import render
import socket

def registerUser(req):
    print("$@")
    return render(req, 'userManager/registerPage.html')

def loginUser(req):
    return render(req, 'userManager/loginPage.html')

def forgotPassword(req):
    return render(req, 'userManager/forgotPasswordPage.html')

def profilePage(req):
    return render(req, 'userManager/profilePage.html')
