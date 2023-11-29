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
                <Button startIcon={svgIcon} variant="outlined">
                    Login with Discord
                </Button >
            </div>
        </>
    )
}

export default LoginPage;
