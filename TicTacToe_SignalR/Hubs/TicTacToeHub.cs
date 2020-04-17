using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicTacToe_SignalR.Hubs
{
    public class TicTacToeHub : Hub
    {
        public async Task SendAction(string id, int cpt)
        {
            await Clients.All.SendAsync("PlaceToken", id, cpt);
        }
    }
}
