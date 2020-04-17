﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL.Models;
using DAL.Services;

namespace API.Controllers
{
    public class UserController : ApiController
    {
        private static UserController _instance;

        public static UserController Instance
        {
            get
            {
                _instance = _instance ?? new UserController();
                return _instance;
            }
        }
                  
        [HttpPost]
        [Route("api/UserLogin/")]
        public User GetLogin(User u)
        {
            return UserServices.Instance.GetOne(u);
        }
        
        [HttpPost]
        [Route("api/User/")]
        public User Post(User u)
        {
            UserServices.Instance.Create(u);
            return u;
        }

       
    }
}
