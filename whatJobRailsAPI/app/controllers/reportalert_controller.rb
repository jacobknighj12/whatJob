class ReportalertController < ApplicationController
    rescue_from ActionController::UnpermittedParameters, with: :create

    def index
        @reportalert = Reportalert.all
        render json: @reportalert, status: 201
        puts params
    end

    def create
        @reportalert = Reportalert.create!(reportalert_params)
        render json: @reportalert, status: 201
        puts "creates controller for the reportalertcontroller"
        puts "reportalert_parms"
        puts reportalert_params
        puts "all params"
        puts params
        puts "checking what save returns"
        puts @reportalert.save
        if @reportalert.save
        
            ReportAlertMailer.with(reportalert: @reportalert).report_alert_email.deliver_later
    end
end

end

private
    def reportalert_params
        params.require(:reportalert).permit(:posturl)
    end