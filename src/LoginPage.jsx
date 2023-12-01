import { Button, Icon } from "@mui/material";

const LoginPage = () => {
    const svgIcon = (
        <Icon>
          <img alt="discord" src="discord-icon-svgrepo-com.svg" />
        </Icon>
      );

    return (
        <>
            <div>
                <Button href="https://discord.com/api/oauth2/authorize?client_id=1179496743176507543&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fauth&response_type=code&scope=identify%20email" startIcon={svgIcon} variant="outlined">
                    Login with Discord
                </Button >
            </div>
        </>
    )
}

export default LoginPage;
