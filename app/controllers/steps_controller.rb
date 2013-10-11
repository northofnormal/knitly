class StepsController < ApplicationController
  before_action :fetch_pattern

  def index

    respond_to do |format|
      format.json { render json: @pattern.steps }
    end
  end

  def show
    @step = @pattern.steps.find(params[:id])

    respond_to do |format|
      format.json { render json: @step }
    end
  end

  private

  def fetch_pattern
    @pattern = Pattern.find(params[:pattern_id])
  end
end
