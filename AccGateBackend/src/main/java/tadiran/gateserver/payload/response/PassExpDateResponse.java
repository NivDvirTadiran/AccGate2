package tadiran.gateserver.payload.response;


public class PassExpDateResponse {
    private int passExp;
    private int previousAlertPassExp;

    public PassExpDateResponse(int passExp, int previousAlertPassExp) {
        this.passExp = passExp;
        this.previousAlertPassExp = previousAlertPassExp;
    }

    public int getPassExp() {
        return this.passExp;
    }
    public void setPassExp(int passExp) {
        this.passExp = passExp;
    }

    public int getPreviousAlertPassExp() {
        return this.previousAlertPassExp;
    }
    public void setPreviousAlertPassExp(int previousAlertPassExp) {
        this.previousAlertPassExp = previousAlertPassExp;
    }

}
