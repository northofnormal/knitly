class StepsController < ApplicationController
  before_action :fetch_size

  def index

    respond_to do |format|
      format.json { render json: @pattern.steps }
    end
  end

  def show
    @step = @pattern.steps.find_by_order(params[:order])

    respond_to do |format|
      format.json { render json: @step }
    end
  end

  private

  def fetch_size
    @size = Size.find(params[:size_id])
  end
end
