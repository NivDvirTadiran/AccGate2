package tadiran.gateserver.payload.request;
import tadiran.gateserver.models.ERole;
import tadiran.gateserver.models.EWebApp;
import tadiran.gateserver.models.Role;

import javax.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.Set;

public class WebAppTabRequest {
    @NotBlank
    private String refreshToken;
    private String accessToken;
    private String webApp;

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public void setWebApp(String webApp) {
        this.webApp = webApp;

    }

    public String getAccessToken() {
        return accessToken;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public EWebApp getWebApp() {

        EWebApp res;

        switch (this.webApp) {
            case "GCCS":
                res = EWebApp.WA_GCCS;
                break;
            case "ACCREALTIME":
                res = EWebApp.WA_ACCREALTIME;
                break;
            case "AGENT":
                res = EWebApp.WA_AGENT;
                break;
            case "Admin":
                res = EWebApp.WA_ADMIN;
                break;
            default:
                res = EWebApp.WA_GATE;
                break;
        }
        return res;
    }

    public Set<Role> getRequiredRoles() {

        Set<Role> roles = new HashSet<Role>();

        if (this.webApp != null) {
            switch (this.webApp) {
                case "GCCS":
                    roles.add(new Role(ERole.SupervisorAdmin));
                    roles.add(new Role(ERole.Admin));
                    roles.add(new Role(ERole.SupervisorMonitor));
                    break;
                case "ACCREALTIME":
                    roles.add(new Role(ERole.SupervisorMonitor));
                    break;
                case "AGENT":
                    roles.add(new Role(ERole.User));
                    break;
                case "Admin":
                    roles.add(new Role(ERole.SupervisorAdmin));
                    roles.add(new Role(ERole.Admin));
                    break;
                default:
                    roles.add(new Role(ERole.User));
            }
        }
        else {
            roles.add(new Role(ERole.User));
        }

        return roles;

    }

}
