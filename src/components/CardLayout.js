import React from 'react'

function CardLayout() {
    return (
        <div>
            <div class="card-group">
                <div class="card bg-primary">
                    <div class="card-body text-center">
                        <p class="card-text">first card</p>
                    </div>
                </div>
                <div class="card bg-warning">
                    <div class="card-body text-center">
                        <p class="card-text">second card</p>
                    </div>
                </div>
                <div class="card bg-success">
                    <div class="card-body text-center">
                        <p class="card-text">third card</p>
                    </div>
                </div>
                <div class="card bg-danger">
                    <div class="card-body text-center">
                        <p class="card-text">fourth card</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardLayout