class ReportAlertMailer < ApplicationMailer

    def report_alert_email
        @reportalert = params[:reportalert]
        mail(to: '<whatjob321@gmail.com>', subject: "A post has been flagged")
    end
end
