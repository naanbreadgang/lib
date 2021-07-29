require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = "$";


client.on('ready', () => {
    console.log(`${client.user.tag} is in.`);
  });


//extract command

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
      const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);

            //marco polo
            if (CMD_NAME.toLowerCase() === 'marco') {
                message.channel.send("polo");


      }

    
            //kick done

            if (CMD_NAME.toLowerCase() === 'kick') {

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You don't have permission to use that command.");
    
    else
        if(args.length===0) return message.reply(`please specify the member to be kicked.`);


    else{
        try{
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if (!member) return message.reply(`That user is not present in this server.`);
            if (!member.kickable) return message.reply(`This member cannot be kicked.`);
            
            member.kick().then(message.channel.send(`${member} was kicked from the server`));
            //const user = await message.messageMentions.members.kick(args[0]);
            //message.channel.send('That user was successfully kicked.');    
        }

        catch(err){
            console.log(err);
            message.channel.send('An error occured. Either I do not have permissions or the user was not found.');

        }
    }


}
            //ban done
        if(CMD_NAME.toLowerCase()==='ban') {

            if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permission to use that command.");
            
            else
                if(args.length===0) return message.reply(`please specify the member to be banned.`);
        
        
            else{
                try{
                    const user = await message.guild.members.ban(args[0]);
                    message.channel.send('That user was successfully banned.');
                }
        
                catch(err){
                    console.log(err);
                    message.channel.send('An error occured. Either I do not have permissions or the user was not found.');
        
                }
            }
        
}
            //unban done
        if(CMD_NAME.toLowerCase()==='unban') {

            if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permission to use that command.");
    
            else
                if(args.length===0) return message.reply(`please specify the member to be unbanned.`);


            else{
                try{
                    const user = await message.guild.members.unban(args[0]);
                    message.channel.send('That user was successfully unbanned.');
                    }

                catch(err){
                    console.log(err);
                    message.channel.send('An error occured. Either I do not have permissions or the user was not found.');

        }
    }

}

            //pin done
        if(CMD_NAME.toLowerCase()==='pin')
{

            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You don't have permission to use that command.");
    
            else
                if(args.length===0) return message.reply(`please add the text to be pinned.`);


            else{
                try{
                    //const user = await message.guild.members.unban(args[0]);
                    message.pin(args.join(" "));
                    }

                catch(err){
                    console.log(err);
                    message.channel.send('An error occured. It looks like I do not have the necessary permissions.');

        }
    }

}


}        if(CMD_NAME.toLowerCase()==='announce') {

            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You don't have permission to use that command.");
    
            else
                if(args.length===0) return message.reply(`please add the text to be announced.`);


            else{

                try{
                    const exampleEmbed = new Discord.MessageEmbed()
	                .setColor('#0099ff')
                    .setTitle('ANNOUNCEMENT')
                    .setURL('https://instagram.com/naanbreadgang/')
                    .setAuthor('The Librarian')
                    .setThumbnail('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/90b4db6e-3d5e-4236-8250-a9a6fef0ef4a/da0vbn7-d008a726-c756-4d97-baba-2cae4cb1770f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkwYjRkYjZlLTNkNWUtNDIzNi04MjUwLWE5YTZmZWYwZWY0YVwvZGEwdmJuNy1kMDA4YTcyNi1jNzU2LTRkOTctYmFiYS0yY2FlNGNiMTc3MGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.E1X3dNVe7gcehcdGZ5ZeKLQlM-zl73qqdbyCmanjCUk')
                    .addFields(
                        { name: '', value: args.join(" ") })
                    .setImage('https://data.whicdn.com/images/351807363/original.jpg')
                    .setTimestamp()
	                .setFooter('A WHET BEANS PRODUCTION', 'https://i.imgur.com/wSTFkRM.png');

                    channel.send(exampleEmbed);                                             
   

                }

                catch(err){

                }
                
            }
                





        }//closes the listener
}//closes async
)

//pin

//announce

//timeout

//bulkdel

//mute

//unmute

//reminder


//self-assign a role
    
//if message starts with a prefix ends





client.login(process.env.DISCORD_JS_BOT_TOKEN);