import React, { Fragment, useState } from "react";
import img from "../../../assets/images/rooms/430x300/card-room-430x300-0.jpg";
import avatar from "../../../assets/images/avatars/card-host-150x150-0.jpg";

const CardItem = ({ data }) => {
	const [isOpen, setIsOpen] = useState(false);
	const {
		// id,
		title,
		address,
		// imgUrl,
		bedrooms,
		baths,
		guests,
		isFeatured,
		price,
		hostedBy,
		averageRating
	} = data;

	console.log(isOpen);
	return (
		<Fragment>
			;
			<div className="item-wrap infobox_trigger homey-matchHeight" data-id={346}>
				<div className="media property-item">
					<div className="media-left">
						<div className="item-media item-media-thumb">
							<span className="label-wrap top-left">
								<span className="label label-success label-featured">
									{isFeatured ? "Featured" : ""}
								</span>
							</span>
							<a className="hover-effect" href="https://demo01.gethomey.io/listing/beautiful-cove/">
								<img
									width={450}
									height={300}
									src={img}
									className="img-responsive wp-post-image"
									alt=""
									loading="lazy"
									srcSet="//89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/05-450x300.jpg 450w, //89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/05-300x200.jpg 300w, //89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/05-768x512.jpg 768w, //89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/05-1024x683.jpg 1024w, //89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/05-1140x760.jpg 1140w, //89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/05-120x80.jpg 120w, //89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/05-750x500.jpg 750w, //89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/05.jpg 1620w"
									sizes="(max-width: 450px) 100vw, 450px"
								/>{" "}
							</a>
							<div className="item-media-price">
								<span className="item-price">
									<sup>$</sup>
									{price}
									<sub>/night</sub>
								</span>
							</div>
							<div className="item-user-image">
								<img
									width={36}
									height={36}
									src={avatar}
									className="img-responsive img-circle"
									alt=""
									loading="lazy"
									srcSet="//89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/HomeyHost22-150x150.jpg 150w, //89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/HomeyHost22-300x300.jpg 300w, //89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/HomeyHost22-250x250.jpg 250w, //89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/HomeyHost22-360x360.jpg 360w, //89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/HomeyHost22.jpg 400w"
									sizes="(max-width: 36px) 100vw, 36px"
								/>{" "}
							</div>
						</div>
					</div>
					<div className="media-body item-body clearfix">
						<div className="item-title-head table-block">
							<div className="title-head-left">
								<h2 className="title">
									<a href="https://demo01.gethomey.io/listing/beautiful-cove/">{title}</a>
								</h2>
								<address className="item-address">{address}</address>{" "}
							</div>
						</div>
						<ul className="item-amenities">
							<li>
								<i className="fa fa-bed" /> <span className="total-beds">{bedrooms}</span>{" "}
								<span className="item-label">Bedrooms</span>
							</li>
							<li>
								<i className="fa fa-shower" /> <span className="total-baths">{baths}</span>{" "}
								<span className="item-label">Baths</span>
							</li>
							<li>
								<i className="fa fa-user" /> <span className="total-guests">{guests}</span>{" "}
								<span className="item-label">Guests</span>
							</li>
							<li className="item-type">Bed &amp; Breakfast</li>
						</ul>
						<div className="item-user-image list-item-hidden">
							<img
								width={36}
								height={36}
								src={avatar}
								className="img-responsive img-circle"
								alt=""
								loading="lazy"
								srcSet="//89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/HomeyHost22-150x150.jpg 150w, //89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/HomeyHost22-300x300.jpg 300w, //89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/HomeyHost22-250x250.jpg 250w, //89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/HomeyHost22-360x360.jpg 360w, //89239-630690-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/HomeyHost22.jpg 400w"
								sizes="(max-width: 36px) 100vw, 36px"
							/>{" "}
							<span className="item-user-info">
								Hosted by
								<br />
								{hostedBy.name}
							</span>
						</div>
						<div className="item-footer">
							<div className="footer-right">
								<div className="item-tools">
									<div className={`btn-group dropup ${isOpen ? "open" : ""}`}>
										<button
											className="btn-item-tools dropdown-toggle"
											type="button"
											onClick={() => setIsOpen((prev) => !prev)}>
											<i className="fa fa-ellipsis-v" aria-hidden="true" />
										</button>
										<ul className="dropdown-menu">
											<li>
												<a className="homey_compare compare-346" href data-listing_id={346}>
													Compare
												</a>
											</li>
											<li>
												<a href className="add_fav" data-listid={346}>
													Add to Favorite{" "}
												</a>
											</li>
										</ul>{" "}
									</div>
								</div>
							</div>
							<div className="footer-left">
								<div className="stars">
									<ul className="list-inline rating">
										<li className="fa fa-star" />
										<li className="fa fa-star" />
										<li className="fa fa-star" />
										<li className="fa fa-star" />
										<li className="fa fa-star-o" />
										<li>
											<span className="star-text-right">{averageRating}</span>
										</li>{" "}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default CardItem;
