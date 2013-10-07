class Pattern < ActiveRecord::Base
	has_many :projects

	validates :title, presence: true
	validates :description, presence: true
	validates :gauge, presence: true
	validates :needles, presence: true
	validates :yarn, presence: true
end
