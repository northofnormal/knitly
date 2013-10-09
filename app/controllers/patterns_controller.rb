class PatternsController < ApplicationController
  def new
  	@pattern = Pattern.new
  end

  def create
	 	@pattern = Pattern.new(pattern_params)

	 		if @pattern.save
	 			redirect_to patterns_path
	 		else
	 			render "create"
	 		end
  end

  def index
  	@pattern = Pattern.all

    respond_to do |format|
      format.html
      format.json { render json: @pattern.to_json(:include => :steps) }
    end
  end

  def show
  	@pattern = Pattern.find(params[:id])

    # @step_number = params[:step_number]

  end

  private

  def pattern_params
    params.require(:pattern).permit(:title, :description, :gauge, :needles, :yarn, steps_attributes: [:id, :order, :position, :action, :_destroy])
  end
end
