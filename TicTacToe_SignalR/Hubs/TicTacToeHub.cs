using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicTacToe_SignalR.Hubs
{
    public class TicTacToeHub : Hub
    {
        public async Task SendMessage(string id, int cpt)
        {
            await Clients.All.SendAsync("ReceiveMessage", id, cpt);
        }
    }
}
