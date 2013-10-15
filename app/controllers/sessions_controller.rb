class SessionsController < ApplicationController
  def new
  end

  def create
    user = login(params[:username], params[:email], params[:password], params[:remember_me])
    
    if user
      redirect_back_or_to root_url :notice => "Welcome back!"
    else 
      flash.now.alert = "Username or password is incorrect"
    end
  end

  def destroy
    logout

    redirect_to root_url, :notice => "Goodbye!"
  end
end
