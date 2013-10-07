class Step < ActiveRecord::Base
	belongs_to :pattern

	validates :action, presence: true
	validates :order, presence: true
	validates :position, presence: true
end
