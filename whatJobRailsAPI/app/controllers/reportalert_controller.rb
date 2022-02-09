class ReportalertController < ApplicationController
    def index
        @reportalert = Reportalert.all
        render json: @reportalert, status: 201
    end

    def create
        @reportalert = Reportalert.create(reportalert_params)
        puts "creates controller for the reportalertcontroller"
        puts "reportalert_parms"
        puts reportalert_params
        puts "all params"
        puts params.inspect
        puts "checking what save returns"
        puts @reportalert.save
        if @reportalert.save
        
            ReportAlertMailer.with(reportalert: @reportalert).report_alert_email.deliver_later
    end
end

end

private
    def reportalert_params
        params.permit(:postid)
    end