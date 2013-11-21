class VersionController < ApplicationController
  before_action :fetch_pattern

  def index
    
    respond_to do |format|
      format.json { render json: @pattern.size }
    end
  end

  def show
    @size = @pattern.size.find(params[:id])

    respond_to do |format|
      format.json { render json: @pattern.size }
    end
  end

  def fetch_pattern
    @pattern = Pattern.find(params[:pattern_id])
  end
end
