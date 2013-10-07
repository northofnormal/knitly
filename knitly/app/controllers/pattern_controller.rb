class PatternController < ApplicationController
  def create
  	@pattern = Pattern.new
  end

  def index
  	@pattern = Project.all
  end

  def show
  	@Project = Project.find(params[:id])
  end
end
