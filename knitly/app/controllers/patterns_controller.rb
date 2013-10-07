class PatternsController < ApplicationController
  def new
  	@pattern = Pattern.new
  end

  def create
	 	@pattern = Pattern.new(params.requie(:pattern).permit(:title, :description, :gauge, :needles, :yarn))

	 		if @pattern.save
	 			redirect_to pattern_url
	 		else
	 			render "create"
	 		end
  end

  def index
  	@pattern = Pattern.all
  end

  def show
  	@pattern = Pattern.find(params[:id])
  end
end
