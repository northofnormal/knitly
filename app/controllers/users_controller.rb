class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.save(params[:user])

    if @user.save
      redirect_to root_url, :notice => "Welcome to Knitly!"
    else 
      render :new
    end
  end
end
