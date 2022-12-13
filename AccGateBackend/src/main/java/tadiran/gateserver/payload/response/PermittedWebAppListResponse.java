package tadiran.gateserver.payload.response;


public class PermittedWebAppListResponse {

    private boolean realtime = false;
    private boolean scriptDesigner = false;
    private boolean agent = false;
    private boolean aeonixAdmin = false;
    private boolean admin = false;


    public PermittedWebAppListResponse(boolean realtime, boolean scriptDesigner, boolean agent, boolean aeonixAdmin, boolean admin) {
        this.realtime = realtime;
        this.scriptDesigner = scriptDesigner;
        this.agent = agent;
        this.aeonixAdmin = aeonixAdmin;
        this.admin = admin;
    }

    public boolean getRealtime() {
        return this.realtime;
    }
    public void setRealtime(boolean realtime) {
        this.realtime = realtime;
    }


    public boolean getScriptDesigner() {
        return this.scriptDesigner;
    }
    public void setScriptDesigner(boolean scriptDesigner) {
        this.scriptDesigner = scriptDesigner;
    }


    public boolean getAgent() {
        return this.agent;
    }
    public void setAgent(boolean agent) {
        this.agent = agent;
    }


    public boolean getAeonixAdmin() {
        return this.aeonixAdmin;
    }
    public void setAeonixAdmin(boolean aeonixAdmin) {
        this.aeonixAdmin = aeonixAdmin;
    }


    public boolean getAdmin() {
        return this.admin;
    }
    public void setAdmin(boolean admin) {
        this.admin = admin;
    }

}
